import { Result, Button } from 'antd';
import { useRouter } from "next/router";
const error404 = () => {
    const router = useRouter();
    const handleClick = () => {
        router.push('/')
    }
    return <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={<Button type="primary" onClick={handleClick}>Back Home</Button>}
  />
}
export default error404