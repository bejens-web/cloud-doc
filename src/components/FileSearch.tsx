import React, {useState, useEffect, useRef} from 'react';
import {FontAwesomeIcon, } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons'

const FileSearch: React.FC = () => {
    const [fileSearch, setFileSearch] = useState({isSearch: false, input: ''});
    const refNode = useRef(null);

    useEffect(() => {
        const inputEvent = (event: { keyCode: number; }) => {
            const code = event.keyCode;
            if (code === 13 && fileSearch.isSearch) {
                searchFile(fileSearch.input)
            } else if (code === 27) {
                setFileSearch({isSearch: false, input: ''})
            }
        };

        document.addEventListener("keyup", inputEvent);

        return () => {
            document.removeEventListener("keyup", inputEvent);
        }
    });

    useEffect(() => {
        if (fileSearch.isSearch) {
            // @ts-ignore
            refNode.current.focus()
        }
    }, [fileSearch.isSearch]);
    return (
        <div className='alert alert-primary d-flex justify-content-between align-items-center'>
            {
                !fileSearch.isSearch ?
                    <React.Fragment>
                        <span className='col-8 text' >我的云文档</span>
                        <button
                            type='button'
                            className='icon-button col-4'
                            onClick= {() => {setFileSearch({isSearch: true, input: fileSearch.input})}}
                        >
                            <FontAwesomeIcon icon={faSearch} size='lg'/>
                        </button>
                    </React.Fragment>
                    :
                    <React.Fragment>
                        <input
                            className= 'col-8 input'
                            ref = {refNode}
                            value = {fileSearch.input}
                            onChange={ (e) => {setFileSearch({isSearch: fileSearch.isSearch, input: e.target.value})} }
                        />
                        <button
                            type='button'
                            className='icon-button col-4'
                            onClick= {() => {setFileSearch({isSearch: false, input: fileSearch.input})}}
                        >
                            <FontAwesomeIcon icon={faTimes} size='lg'/>
                        </button>
                    </React.Fragment>
            }
        </div>
    )
};

function searchFile(fileName: String) {
    console.log(fileName);
}

export default FileSearch;
