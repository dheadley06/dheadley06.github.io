import {useState, useEffect} from 'react';

const ToggleComponent = () => {
    const [isDark, setDarkMode] = useState(false);

    const HandleToggleChange = () => {
        setDarkMode(isDark => !isDark);
    }   

    useEffect(() => {
        const root = document.documentElement;
        if(isDark) {
            // Set dark mode
            root.setAttribute("data-theme", "dark");
        } else {
            // Unset dark mode
            root.removeAttribute("data-theme");
        }
    });

    return (
        <label className = "mode-toggle">
            <input 
                type = "checkbox" 
                id = "dark-mode-toggle" 
                onChange = {HandleToggleChange}
            />
            <span className = "mode-slider"></span>
        </label>
    )
}

export default ToggleComponent;