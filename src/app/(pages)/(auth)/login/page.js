import './styles.css';
import { constants } from '@/app/_common'

export const metadata = {
    title: `Login`,
    description: `Testing Screen`
}

export default function Login() {

    const { goldiamCrafters, welcomeBack, loginSubTitle } = constants;

    return <div className='flex h-dvh'>
        <div className='flex flex-1 justify-center items-center bg-login-background'>
            <div className='flex flex-col'>
                <span className='text-6xl text-white'>{`Hello`}</span>
                <span className='text-6xl text-white'>{goldiamCrafters}</span>
            </div>
        </div>
        <div className='flex flex-1 w-64 justify-center items-center flex-col p-18'>
            <div className='h-12 w-96 mt-12 bg-login-logo' />
            <div className='flex flex-1 flex-col justify-center'>
                <span>{welcomeBack}</span>
                <span>{loginSubTitle}</span>
                <input />
                <input />
                <button />
            </div>
        </div>
    </div>
}