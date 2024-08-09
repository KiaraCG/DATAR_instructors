import React, {useEffect, useState} from 'react';
import Editor from '@monaco-editor/react';
import axios from 'axios';

const ReadOnlyPythonEditor = ({path=""}) => {
    const [code, setCode] = useState('');

    useEffect(() => {
        // Fetch the Python file content
        axios.get(path)
            .then(response => {
                setCode(response.data);
            })
            .catch(error => {
                console.error('Error fetching the Python file:', error);
            });
    }, [path]);

    return (
        <Editor
            height="600px"
            width="90%"
            defaultLanguage="python"
            value={code}
            options={{readOnly: true}}
        />

    );
};

export default ReadOnlyPythonEditor;
