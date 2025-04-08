const Container = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <div className="max-w-7xl px-5 md:px-20 mx-auto">{children}</div>
        </>
    );
};

export default Container;
