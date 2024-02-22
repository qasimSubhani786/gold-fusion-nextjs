import Image from 'next/image'
import './styles.css';

export const metadata = {
    title: `Login`,
    description: `Testing Screen`
}

export default function Login() {
    return <div style={{
        height: `100vh`,
        backgroundColor: `white`,
        display: 'flex',
        flexDirection: 'row'
    }}>
        <div className='leftSectionContainer'>
            <div style={{
                flexDirection: 'column',
                display: 'flex'
            }}>
                <span style={{
                    fontSize: '60px',
                    color: 'white'
                }}>Hello</span>
                <span style={{
                    fontSize: '60px',
                    color: 'white'
                }}>Goldiam Crafters</span>
            </div>
        </div>
        <div style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            padding: '150px'
        }}>
            <Image
                src={`/assets/login-logo.png`}
                width={500}
                height={200}
                alt="Picture of the author"
            />
            <div style={{
                display: 'flex',
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center'
            }}>
                <span>Welcome Back</span>
                <span>Please login to your account to proceed</span>
                <input />
                <input />
                <button />
            </div>

        </div>
    </div>
}