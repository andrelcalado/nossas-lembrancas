// Styles
import { HomeContent, Title } from "./styles";

// Components
import LoginForm from "@/components/LoginForm";

export default function Home() {
  return (
    <HomeContent>
      <div className="container">
        <Title>Phone Validation - Firebase</Title>

        <LoginForm />
      </div>
    </HomeContent>
  );
}
