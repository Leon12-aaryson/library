import { useLocation, useNavigate } from "react-router-dom";

export default function Homepage() {
  const location = useLocation()

  return (
    <>
      <section>
        <h1>Hello {location.state.id} homepage welcome to Library locale</h1>
      </section>
    </>
  );
}