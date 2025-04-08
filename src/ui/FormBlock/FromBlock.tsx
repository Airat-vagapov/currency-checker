import { gridClasses } from "@/styles/styles";

type FormBlockProps = {
    children: React.ReactNode;
    grid?: number;
    onSubmit: () => void;
};

const FormBlock: React.FC<FormBlockProps> = ({ children, onSubmit, grid }) => {
    console.log(grid);
    return (
        <form
            className={`
                gap-y-4
                ${
                    grid && gridClasses ? `grid ${gridClasses[grid]} gap-2` : ""
                }`}
            onSubmit={onSubmit}
        >
            {children}
        </form>
    );
};

export default FormBlock;
