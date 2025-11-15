import { motion } from "framer-motion";

const stacks = [
  { 
    name: "React", 
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="2.5" fill="#61DAFB"/>
        <ellipse cx="16" cy="16" rx="11" ry="4" stroke="#61DAFB" strokeWidth="1" fill="none"/>
        <ellipse cx="16" cy="16" rx="11" ry="4" stroke="#61DAFB" strokeWidth="1" fill="none" transform="rotate(60 16 16)"/>
        <ellipse cx="16" cy="16" rx="11" ry="4" stroke="#61DAFB" strokeWidth="1" fill="none" transform="rotate(120 16 16)"/>
      </svg>
    )
  },
  { 
    name: "TypeScript", 
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 128 128" fill="none">
        <rect width="128" height="128" rx="6" fill="#3178C6"/>
        <path d="M22.67 47h33.544v11.174H42.77v56.026H33.43V58.174H22.67V47zM67.217 114.2a34.93 34.93 0 0 1-7.684-.85l-1.236-11.167a36.614 36.614 0 0 0 7.684.696c6.848 0 9.688-3.032 9.688-8.298 0-5.047-2.24-7.576-8.296-11.182-7.392-4.338-11.42-8.756-11.42-16.332 0-9.688 6.848-15.736 17.128-15.736 4.96 0 8.448.688 10.382 1.23l-1.082 10.63c-1.472-.548-4.007-1.082-8.008-1.082-6.088 0-8.448 3.338-8.448 7.073 0 4.882 2.772 6.966 9.308 10.866 8.448 4.882 11.42 10.478 11.42 17.52 0 10.01-7.068 16.632-18.412 16.632z" fill="white"/>
      </svg>
    )
  },
  { 
    name: "Tailwind CSS", 
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 32 32" fill="none">
        <path d="M16 6.286c-2.667 0-4.333 1.333-5 4 1-1.333 2.167-1.833 3.5-1.5.761.19 1.304.744 1.907 1.357C17.531 11.27 18.8 12.571 21 12.571c2.667 0 4.333-1.333 5-4-1 1.333-2.167 1.833-3.5 1.5-.761-.19-1.304-.744-1.907-1.357C19.469 7.587 18.2 6.286 16 6.286zM11 12.571c-2.667 0-4.333 1.333-5 4 1-1.333 2.167-1.833 3.5-1.5.761.19 1.304.744 1.907 1.357 1.124 1.127 2.393 2.429 4.593 2.429 2.667 0 4.333-1.333 5-4-1 1.333-2.167 1.833-3.5 1.5-.761-.19-1.304-.744-1.907-1.357C14.469 13.873 13.2 12.571 11 12.571z" fill="#06B6D4"/>
      </svg>
    )
  },
  { 
    name: "Vite", 
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 410 404" fill="none">
        <defs>
          <linearGradient id="vite1" x1="6" y1="33" x2="235" y2="344" gradientUnits="userSpaceOnUse">
            <stop stopColor="#41D1FF"/>
            <stop offset="1" stopColor="#BD34FE"/>
          </linearGradient>
          <linearGradient id="vite2" x1="194.651" y1="8.818" x2="236.076" y2="292.989" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFEA83"/>
            <stop offset="0.083" stopColor="#FFDD35"/>
            <stop offset="1" stopColor="#FFA800"/>
          </linearGradient>
        </defs>
        <path d="M399.641 59.5246L215.643 388.545C211.844 395.338 202.084 395.378 198.228 388.618L10.5817 59.5563C6.38087 52.1896 12.6802 43.2665 21.0281 44.7586L205.223 77.6824C206.398 77.8924 207.601 77.8904 208.776 77.6763L389.119 44.8058C397.439 43.2894 403.768 52.1434 399.641 59.5246Z" fill="url(#vite1)"/>
        <path d="M292.965 1.5744L156.801 28.2552C154.563 28.6937 152.906 30.5903 152.771 32.8622L144.395 174.33C144.198 177.662 147.258 180.248 150.51 179.498L188.42 170.749C191.967 169.931 195.172 173.055 194.443 176.622L183.18 231.775C182.422 235.487 185.907 238.661 189.532 237.56L212.947 230.446C216.577 229.344 220.065 232.527 219.297 236.242L201.398 322.875C200.278 328.294 207.486 331.249 210.492 326.603L212.5 323.5L323.454 102.072C325.312 98.3645 322.108 94.137 318.036 94.9228L279.014 102.454C275.347 103.161 272.227 99.746 273.262 96.1583L298.731 7.86689C299.767 4.27314 296.636 0.855181 292.965 1.5744Z" fill="url(#vite2)"/>
      </svg>
    )
  },
];

export default function AcercaDe() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-center text-blue-700">
        Stack Utilizado en el Proyecto
      </h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stacks.map((stack, i) => (
        <motion.div
          key={stack.name}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.2 }}
          whileHover={{ scale: 1.05 }}
          className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition"
        >
          <div className="flex justify-center mb-3">{stack.icon}</div>
          <p className="font-semibold">{stack.name}</p>
        </motion.div>
      ))}
      </div>
    </div>
  );
}
