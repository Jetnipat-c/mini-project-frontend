import { Result, Button } from 'antd';
import { useRouter } from "next/router";
const error404 = () => {
    const router = useRouter();
    const handleClick = () => {
        router.push('/')
    }
    return <Result
    status="404"
    title={<div className="text-white">404</div>}
    subTitle={<div className="text-white">Sorry, the page you visited does not exist.</div>}
    extra={<Button type="primary" onClick={handleClick}>Back Home</Button>}
  />
}
export default error404