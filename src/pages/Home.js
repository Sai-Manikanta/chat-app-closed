import { motion } from 'framer-motion'
import Header from '../components/home/Header';
// import ChatBox from '../components/home/ChatBox';
// import ChatSend from '../components/home/ChatSend'

function Home() {
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-screen flex flex-col max-w-lg mx-auto bg-gray-900"
            style={{ color: 'rgb(69, 156, 173)' }}
        >
            <Header />
            <div className="p-5 h-full">
                {/* <h1 className="text-2xl uppercase font-bold tracking-wide">Page closed</h1> */}
                <p className="my-4 text-lg">Component rights belongs to contributor</p>
                <a 
                href="https://github.com/Sai-Manikanta"
                className="underline mt-4 block"
                style={{ color: 'rgb(69, 156, 173)' }}
                >
                    https://github.com/Sai-Manikanta
                </a>
                <a 
                href="https://github.com/Sai-Manikanta?tab=repositories"
                className="underline mt-3 block"
                style={{ color: 'rgb(69, 156, 173)' }}
                >
                    https://github.com/Sai-Manikanta?tab=repositories
                </a>
                <p className="mt-4">&#169; Netlify </p>
            </div>
            {/* <ChatBox /> */}
            {/* <ChatSend />  */}
        </motion.div>
    )
}

export default Home
