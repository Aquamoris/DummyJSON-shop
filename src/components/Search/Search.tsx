import React, {useState} from 'react';

const Search:React.FC = () => {
    const [text, setText] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.currentTarget.value);
    }

    return (
        <div>
            <input value={text}
                   onChange={handleChange}
                   type="text"/>
            <button>Find</button>
        </div>
    );
};

export default Search;