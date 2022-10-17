import { SVGAttributes } from "react";

interface LogoProps extends SVGAttributes<HTMLOrSVGElement> {}

export function Logo(props: LogoProps) {
  return (
    <svg
      width={110}
      height={115}
      viewBox="0 0 110 115"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M110 57.51c0-6.685-9.126-13.021-23.117-16.95 3.23-13.084 1.794-23.493-4.529-26.826-1.457-.782-3.161-1.152-5.022-1.152v4.587c1.031 0 1.86.186 2.556.535 3.05 1.605 4.372 7.715 3.34 15.573-.246 1.934-.65 3.97-1.143 6.048-4.394-.987-9.193-1.748-14.237-2.242-3.027-3.806-6.166-7.262-9.328-10.286 7.31-6.233 14.17-9.648 18.834-9.648V12.56c-6.166 0-14.237 4.032-22.399 11.027-8.161-6.953-16.233-10.944-22.399-10.944v4.587c4.641 0 11.525 3.394 18.834 9.586a99.592 99.592 0 00-9.26 10.266c-5.067.494-9.865 1.255-14.26 2.263a57.455 57.455 0 01-1.166-5.966c-1.054-7.859.247-13.968 3.274-15.593.672-.37 1.547-.535 2.578-.535v-4.588c-1.883 0-3.587.37-5.067 1.152-6.3 3.333-7.713 13.722-4.462 26.764C9.08 44.53 0 50.845 0 57.51c0 6.686 9.126 13.022 23.117 16.951-3.23 13.084-1.794 23.493 4.529 26.826 1.457.781 3.161 1.152 5.045 1.152 6.165 0 14.237-4.032 22.399-11.027 8.161 6.953 16.233 10.944 22.399 10.944 1.883 0 3.587-.37 5.067-1.152 6.3-3.332 7.713-13.721 4.462-26.763C100.919 70.51 110 64.175 110 57.51zM80.807 43.79c-.83 2.653-1.86 5.389-3.027 8.125a95.115 95.115 0 00-2.937-4.937c-1.031-1.646-2.13-3.25-3.229-4.814 3.184.432 6.256.967 9.193 1.625zM70.538 65.697c-1.749 2.777-3.542 5.41-5.403 7.858A127.1 127.1 0 0155 73.968c-3.386 0-6.771-.145-10.09-.391a112.626 112.626 0 01-5.426-7.817 104.35 104.35 0 01-4.663-8.188c1.39-2.757 2.96-5.513 4.64-8.208 1.75-2.777 3.544-5.41 5.404-7.858A127.1 127.1 0 0155 41.094c3.386 0 6.771.144 10.09.391a112.647 112.647 0 015.426 7.817 104.35 104.35 0 014.663 8.188 112.087 112.087 0 01-4.64 8.208zm7.242-2.674a83.351 83.351 0 013.094 8.187 108.72 108.72 0 01-9.237 1.646c1.098-1.584 2.197-3.21 3.228-4.876a114.1 114.1 0 002.915-4.957zm-22.735 21.95a87.43 87.43 0 01-6.233-6.584c2.018.083 4.08.144 6.166.144a124.1 124.1 0 006.233-.144 82.687 82.687 0 01-6.166 6.583zM38.363 72.856a109.322 109.322 0 01-9.193-1.626c.83-2.653 1.861-5.39 3.027-8.125a95.183 95.183 0 002.938 4.937 134.95 134.95 0 003.228 4.814zm16.57-42.81a87.432 87.432 0 016.233 6.583c-2.018-.082-4.08-.144-6.166-.144a124.1 124.1 0 00-6.233.144 82.688 82.688 0 016.166-6.583zM38.34 42.164c-1.099 1.584-2.197 3.21-3.229 4.875a113.518 113.518 0 00-2.915 4.938 83.352 83.352 0 01-3.094-8.188 117.686 117.686 0 019.238-1.625zM18.049 67.919C10.112 64.814 4.978 60.74 4.978 57.51c0-3.23 5.134-7.323 13.071-10.409 1.929-.761 4.036-1.44 6.211-2.078 1.278 4.032 2.96 8.229 5.045 12.528-2.063 4.28-3.722 8.455-4.978 12.467a72.18 72.18 0 01-6.278-2.099zm12.063 29.397c-3.05-1.604-4.372-7.714-3.34-15.572.246-1.934.65-3.97 1.143-6.049 4.394.988 9.193 1.75 14.238 2.243 3.026 3.806 6.165 7.262 9.327 10.286-7.31 6.233-14.17 9.648-18.834 9.648-1.01-.02-1.861-.206-2.534-.556zm53.184-15.675c1.054 7.858-.247 13.968-3.274 15.593-.672.37-1.547.535-2.578.535-4.641 0-11.525-3.395-18.834-9.587a99.592 99.592 0 009.26-10.265c5.067-.493 9.865-1.255 14.26-2.263.516 2.078.92 4.074 1.166 5.987zm8.632-13.722c-1.928.762-4.036 1.44-6.21 2.078-1.279-4.032-2.96-8.228-5.045-12.528 2.062-4.279 3.722-8.455 4.977-12.466a75.335 75.335 0 016.3 2.098c7.938 3.106 13.072 7.18 13.072 10.41-.022 3.229-5.157 7.323-13.094 10.408z"
        fill="#81D8F7"
      />
      <path
        d="M54.978 66.912c5.659 0 10.246-4.21 10.246-9.402 0-5.192-4.587-9.4-10.246-9.4-5.66 0-10.247 4.208-10.247 9.4s4.587 9.402 10.247 9.402z"
        fill="#81D8F7"
      />
    </svg>
  )
}