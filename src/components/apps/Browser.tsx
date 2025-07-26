export const Browser = ({link=""}) => {
    return(
        <iframe
        src={link ?? "https://www.google.com/webhp?igu=1"}
        width="100%"
        height="100%"
        style={{
          borderBottomLeftRadius: "1rem",
          borderBottomRightRadius: "1rem",
          display: "block",
          position: "relative",
        }}
        frameBorder="0"
        allowFullScreen
      />
    )
}