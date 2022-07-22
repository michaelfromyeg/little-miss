export const LittleWrapper = (props) => {
    const { children } = props;

    return <div className={"wrapper"}>
        {children}
    </div>
}