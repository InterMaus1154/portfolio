import {useContext, useState} from 'react';
import {ThemeContext, Themes} from "../../context/ThemeContext";

export const ThemeModal = () => {

    // const [checked, setChecked] = useState<boolean>(false);
    const {theme, setTheme} = useContext(ThemeContext);


    return (
        <>
            <h1>Change theme</h1>
            <div className="Colour-boxes">
                <label className="Colour-box">
                    <span className={"Colour-name"}>Clean</span>
                    <input name={"colours"} type="radio" value={"clean"} checked={theme === "clean"}
                           onChange={e => setTheme(e.target.value as any)}/>
                    <div className="Colours Colour-scheme-clean" aria-hidden={true}>
                        <span className={"Colour"}></span>
                        <span className={"Colour"}></span>
                        <span className={"Colour"}></span>
                        <span className={"Colour"}></span>
                        <span className={"Colour"}></span>
                    </div>
                </label>
                <label className="Colour-box">
                    <span className={"Colour-name"}>Warm</span>
                    <input name={"colours"} type="radio" value={"warm"} checked={theme === "warm"}
                           onChange={e => setTheme(e.target.value as any)}/>
                    <div className="Colours Colour-scheme-warm" aria-hidden={true}>
                        <span className={"Colour"}></span>
                        <span className={"Colour"}></span>
                        <span className={"Colour"}></span>
                        <span className={"Colour"}></span>
                        <span className={"Colour"}></span>
                    </div>
                </label>
                <label className="Colour-box">
                    <span className={"Colour-name"}>Modern</span>
                    <input name={"colours"} type="radio" value={"modern"} checked={theme === "modern"}
                           onChange={e => setTheme(e.target.value as any)}/>
                    <div className="Colours Colour-scheme-modern" aria-hidden={true}>
                        <span className={"Colour"}></span>
                        <span className={"Colour"}></span>
                        <span className={"Colour"}></span>
                        <span className={"Colour"}></span>
                        <span className={"Colour"}></span>
                    </div>
                </label>
                {/*<label className="Colour-box">*/}
                {/*    <span className={"Colour-name"}>Dark</span>*/}
                {/*    <input name={"colours"} type="radio" value={"dark"} checked={theme === "dark"}*/}
                {/*           onChange={e => setTheme(e.target.value as any)}/>*/}
                {/*    <div className="Colours Colour-scheme-dark" aria-hidden={true}>*/}
                {/*        <span className={"Colour"}></span>*/}
                {/*        <span className={"Colour"}></span>*/}
                {/*        <span className={"Colour"}></span>*/}
                {/*        <span className={"Colour"}></span>*/}
                {/*        <span className={"Colour"}></span>*/}
                {/*    </div>*/}
                {/*</label>*/}
            </div>
        </>
    );
};
