import Link from "next/link";

const RightArrow = (props) => {
  return (
    <Link
      href={props.href}
      className="lg:hidden text-primary absolute bottom-8 right-4 md:bottom-16 md:right-8"
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
          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
        />
      </svg>
    </Link>
  );
};

export default RightArrow;
