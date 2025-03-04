import Container from "./ui/Container";
import Logo from "./Logo";
export default function Header() {
  return (
    <header className="bg-neutral-200 shadow-2xl">
      <Container>
        <div className="mb-5">
          <Logo />
        </div>
      </Container>
    </header>
  );
}
