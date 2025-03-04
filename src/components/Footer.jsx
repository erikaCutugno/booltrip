import Container from "./ui/Container";
import LogoSmall from "./LogoSmall";
export default function Footer() {
  return (
    <footer className="bg-neutral-200">
      <Container>
        <div className="mt-5">
          <LogoSmall />
        </div>
      </Container>
    </footer>
  );
}
