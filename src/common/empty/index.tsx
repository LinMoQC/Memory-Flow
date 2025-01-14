import { Empty } from 'antd'
import empty from '../../assets/empty.jpg'
import './index.css'

interface EmptyStatusProps {
    width: number
    height: number
    description: string
    className?: string
}

const EmptyStatus: React.FC<EmptyStatusProps> = (props) => {
    const {width,height,description,className} = props
    return <Empty
        image={<img
            src={empty}
            alt="No Data"
            style={{ width: width, height: height }}
        />}
        description={description}
        className={className}
    />
}

export default EmptyStatus