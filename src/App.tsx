import { Button } from "./components/ui/button";
import './dist/style.css'

export default function App() {
  return (
    <div>
      <Button
        variant="outline"
        size="lg"
        onClick={() => alert("Hello, world!")}
      >
        <span className="text-lg">Click me</span>
      </Button>
    </div>
  );
}
