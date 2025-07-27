import { motion } from 'framer-motion'
import '../Sidebar.scss'

const Path = (props) => (
    <motion.path
        fill="transparent"
        strokeWidth="3"
        stroke="#111"
        strokeLinecap="round"
        {...props}
    />
)

const ToggleButton = ({ open, setOpen }) => {
    return (
        <button onClick={() => setOpen(prev => !prev)} className="toggle-button">
            <svg width="23" height="23" viewBox="0 0 23 23">
                <Path
                    variants={{
                        closed: { d: "M 2 2.5 L 20 2.5" },
                        open: { d: "M 3 16.5 L 17 2.5" }
                    }}
                    animate={open ? "open" : "closed"}
                    initial={false}
                />
                <Path
                    d="M 2 11.5 L 20 11.5"
                    variants={{
                        closed: { opacity: 1 },
                        open: { opacity: 0 }
                    }}
                    animate={open ? "open" : "closed"}
                    initial={false}
                />
                <Path
                    variants={{
                        closed: { d: "M 2 20.5 L 20 20.5" },
                        open: { d: "M 3 2.5 L 17 16.5" }
                    }}
                    animate={open ? "open" : "closed"}
                    initial={false}
                />
            </svg>
        </button>
    )
}

export default ToggleButton

