import useTheme from "hooks/useTheme";

export default function ProductHuntButton () {
  const { isDark, theme } = useTheme();

  return (
    <a
      href="https://www.producthunt.com/posts/rasengan-js?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-rasengan-js"
      target="_blank"
      rel="noreferrer"
    >
      <img
        src={`https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=313523&theme=${theme}`}
        alt="Rasengan.js - The ultimate React framework for building high-quality web applications | Product Hunt"
        style={{ width: "150px", height: "54px" }}
      />
    </a>
  );
}