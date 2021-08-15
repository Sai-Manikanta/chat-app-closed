import { motion } from 'framer-motion'
// import Header from '../components/home/Header';
// import ChatBox from '../components/home/ChatBox';
// import ChatSend from '../components/home/ChatSend'

function Home() {
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-screen flex flex-col max-w-lg mx-auto p-5 bg-gray-900"
            style={{ color: 'rgb(69, 156, 173)' }}
        >
            <h1 className="text-2xl uppercase font-bold tracking-wide">Page closed</h1>
            <p className="mt-4">This page was closed by:</p>
            <a 
              href="https://github.com/Sai-Manikanta"
              className="underline mt-3"
              style={{ color: 'rgb(69, 156, 173)' }}
            >
                https://github.com/Sai-Manikanta
            </a>
            <a 
              href="https://github.com/Sai-Manikanta?tab=repositories"
              className="underline mt-3"
              style={{ color: 'rgb(69, 156, 173)' }}
            >
                https://github.com/Sai-Manikanta?tab=repositories
            </a>
            <p className="mt-4">&#169; Netlify </p>
            {/* <Header />
            <ChatBox />
            <ChatSend /> */}
        </motion.div>
    )
}

export default Home
