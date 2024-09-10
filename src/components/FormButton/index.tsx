import s from "./FormButton.module.scss";

interface FormButtonProps {
    text: string;
    disabled?: boolean;
}

const FormButton: React.FC<FormButtonProps> = ({ text, disabled, }) => {
    return (
        <button type="submit" className={s.button} disabled={disabled}>
            {text || "submit"}
        </button>
    );
};

export default FormButton;
