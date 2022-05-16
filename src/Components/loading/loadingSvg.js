export default function loadingSvg() {
    return(
        <svg  
        style={{
            margin: 'auto',
            display: 'block',
            shapeRendering: 'auto',
        }}
        width="200px" 
        height="200px" 
        viewBox="0 0 100 100" 
        preserveAspectRatio="xMidYMid">
            
        <rect 
        x="17.5" 
        y="33" 
        width="15" 
        height="34" 
        fill="#003b64">
        <animate attributeName="y" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" values="16;33;33" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.2s"></animate>
        <animate attributeName="height" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" values="68;34;34" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.2s"></animate>
        </rect>
        <rect x="42.5" y="33" width="15" height="34" fill="#faf3f3">
        <animate attributeName="y" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" values="20.25;33;33" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.1s"></animate>
        <animate attributeName="height" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" values="59.5;34;34" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.1s"></animate>
        </rect>
        <rect x="67.5" y="33" width="15" height="34" fill="#003b64">
        <animate attributeName="y" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" values="20.25;33;33" keySplines="0 0.5 0.5 1;0 0.5 0.5 1"></animate>
        <animate attributeName="height" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" values="59.5;34;34" keySplines="0 0.5 0.5 1;0 0.5 0.5 1"></animate>
        </rect>
        </svg>
    )
}