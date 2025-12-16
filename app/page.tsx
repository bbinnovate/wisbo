import FadeInFromBottom from "./components/Animation/FadeInFromBottom";
import FadeInFromLeft from "./components/Animation/FadeInFromLeft";
import FadeInFromRight from "./components/Animation/FadeInFromRight";
import FadeInFromTop from "./components/Animation/FadeInFromTop";

export default function Home() {
  return (
    <main className="container mx-auto py-16">
      <h1>Heading H1 – Hero Title</h1>
      <p>
        This is a paragraph text. If your globals.css is working, this should
        use your custom font, font size, and line height.
      </p>

      <h2>Heading H2</h2>
      <p>
        Another paragraph to test font scaling and spacing.
      </p>

      <h3>Heading H3</h3>
      <ul>
        <li>List item one</li>
        <li>List item two</li>
      </ul>

      <h4>Heading H4</h4>
      <h5>Heading H5</h5>
      <h6>Heading H6</h6>

      <div className="mt-8">
        <p className="text-primary">Primary Color Text</p>
        <p className="black-text">Black Text</p>
        <p className="grey-text">Grey Text</p>
        <p className="white-text bg-black inline-block px-4 py-2">
          White Text on Black
        </p>
      </div>

      <div className="mt-8 border-radious bg-zinc-100 p-6">
        <p>This box tests border radius + container padding.</p>
      </div>


      <FadeInFromTop>
  <h2>Fade from top</h2>
</FadeInFromTop>

<FadeInFromLeft>
  <div>Fade from left</div>
</FadeInFromLeft>

<FadeInFromRight>
  <div>Fade from right</div>
</FadeInFromRight>

<FadeInFromBottom>
  <p>Fade from bottom</p>
</FadeInFromBottom>


    </main>
  );
}
 