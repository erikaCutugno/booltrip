import Container from "./ui/Container";
import Logo from "./Logo";
export default function Header() {
  return (
    <header className="bg-neutral-100 shadow-2xl">
      <Container>
        <div className="mb-5 w-40">
          <Logo />
        </div>
      </Container>
    </header>
  );
}
