import Container from "@/ui/Container/Container";

const Header = () => {
    return (
        <Container>

            <div className="flex items-center justify-center py-5 bg-lightBlack rounded-lg mt-5">
                {/* <img className="h-6" src="/mainlogo.svg" alt="" /> */}
                <p className="md:text-3xl text-xl"><span className="md:text-3xl text-xl text-orange">CC</span>onverter</p>
            </div>
        </Container>
    );
};

export default Header;