/**
* @description 标签样式组件
* @author   fc
* @exports {SeeTag}
* @props 
*/
const SeeTag = (props) => {
    const { name, bgColor, ftColor } = props;
    return (
        <div className="rounded inline-flex content-center" style={{ width: 'auto', height: '24px', lineHeight: '14px', fontSize: '14px', color: ftColor, backgroundColor: bgColor, margin: '4px', padding: '5px' }}>
            {name}
        </div>
    )
}
export default SeeTag;