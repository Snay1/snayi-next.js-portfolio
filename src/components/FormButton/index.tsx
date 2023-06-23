import s from "./FormButton.module.scss";

interface IFormButton {
    text: string;
}

const FormButton = ({ text }: IFormButton) => {
    return (
        <button type="submit" className={s.button}>
            {text || "submit"}
        </button>
    );
};

export default FormButton;
