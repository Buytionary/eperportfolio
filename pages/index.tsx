import Header from "@/components/Header";
import { Container } from "@/components/layout";

// import author from "@/public/gourav.jpg";
import Link from "next/link";

export default function Home(): JSX.Element {
  return (
    <div>
      <Header />
      <Container>
        <div>
          <div className="flex items-center mb-10">
            <img
              className="rounded-full mr-8"
              width="128"
              height="128"
              src="/eper.jpg"
              alt="Eper Gaboni"
            />
            <div className="prose prose-lg">
              <Link href="/">
                <a title="Homepage" className="no-underline">
                  <h1
                    className="bg-clip-text text-transparent pb-3 mb-4 tracking-wide font-bold text-5xl" // bg-gradient-to-r from-blue-500 to-green-400
                    style={{
                      backgroundImage: "linear-gradient(90deg,#ff4d4d,#f9cb28)",
                    }}
                  >
                    Eper Gaboni
                  </h1>
                </a>
              </Link>

              <nav className="flex justify-between md:justify-around ">
                <Link href="https://twitter.com/epergab">
                  <a
                    target="blank"
                    rel="noopener"
                    title="Follow @epergaboni on Twitter"
                  >
                    @EperGaboni
                  </a>
                </Link>
                <Link href="/blog">
                  <a title="Blog">Blog</a>
                </Link>
              </nav>
            </div>
          </div>

          <div className="prose prose-lg">
            <p>
              Hi, I'm Eper Gaboni, Philippine based SEO Specialist, Web Designer
              & Developer. Focused on crafting beautiful & user-friendly
              experiences. I've built hundreds of user interfaces around the
              globe. Currently, I am building websites at{" "}
              <a href="https://webdevpl.us" target="_blank" rel="noopener">
                {" "}
                WebDev+
              </a>{" "}
              <br />
              Previously, I worked as a Technical SEO, Web Designer , built
              multiple side projects, and worked for other tech companies. You
              can reach out to me at{" "}
              <i>
                {" "}
                <Link href="mailto:hi@epergaboni.com?subject=Web Design Inquiry">
                  <a title="Blog">hi@epergaboni.com</a>
                </Link>
              </i>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
