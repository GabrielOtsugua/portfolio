import Link from "next/link";

const LeftArrow = (props) => {
  return (
    <Link
      href={props.href}
      className="lg:hidden text-primary absolute bottom-8 left-4 md:bottom-16 md:left-8"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-8 h-8 md:w-16 md:h-16"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
        />
      </svg>
    </Link>
  );
};

export default LeftArrow;
