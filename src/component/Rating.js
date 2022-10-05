function Rating(props) {
    const etoile = props.star
    let note =''
    let star = '★'
    for (let i = 0; i < etoile; i++) {
        note += star
    }
    return (
        note
    )

}
export default Rating;