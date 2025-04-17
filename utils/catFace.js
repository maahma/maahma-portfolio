"use client"
import {useState} from "react"


export default function CatFace() {

    const pupilMiddle = [
        // PUPILS IN THE MIDDLE - CURSOR ON FACE 
        429,430,459,460,489,490,  // left eye
        439,440,469,470,499,500,  // right eye
    ]

    const [pupilPixels, setPupilPixels] = useState(pupilMiddle)

    const kittyPixels = [
        3,4,5,24,25,26,32,33,35,36,53,54,56,57,62,66,67,82,83,87,
        92,97,98,111,112,117,122,128,129,
        140,141,147,152,159,170,177,
        182,189,190,191,192,193,194,195,196,197,198,199,200,207,
        212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,
        242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,
        272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,
        303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,
        333,334,335,336,337,338,339,340,341,342,343,344,345,346,347,348,349,350,351,352,353,354,355,356,
        363,364,365,366,372,373,374,375,376,377,383,384,385,386,
        393,394,395,403,404,405,406,414,415,416,
        423,424,433,434,435,436,445,446,
        453,454,463,464,465,466,475,476,
        483,484,493,494,495,496,505,506,
        511,512,513,514,523,524,525,526,535,536,537,538,
        543,544,545,552,553,554,555,556,557,564,565,566,
        571,572,573,574,575,576,577,578,579,580,581,582,583,586,587,588,589,590,591,592,593,594,595,596,597,598,
        604,605,606,607,608,609,610,611,612,613,614,615,616,617,618,619,620,621,622,623,624,625,
        635,636,637,638,639,640,641,642,643,644,645,646,647,648,649,650,651,652,653,654,
        667,668,669,670,671,672,673,674,675,676,677,678,679,680,681,682,
        699,700,701,702,703,704,705,706,707,708,709,710,
        729,730,731,732,733,734,735,736,737,738,739,740,
        758,759,760,761,762,763,764,765,766,767,768,769,770,771,
        788,789,790,791,792,793,794,795,796,797,798,799,800,801,
        817,818,819,820,821,822,823,824,825,826,827,828,829,830,831,832    
    ];

    const pinkPixels = [
        584,585,34,55,63,64,65,84,85,86,93,94,95,96,113,114,115,116,
        123,124,125,126,127,142,143,144,145,146,153,154,155,156,157,158,
        171,172,173,174,175,176,183,184,185,186,187,188,201,202,203,204,205,206
    ]


    // const pupilPixels = [
        // PUPILS IN THE MIDDLE - CURSOR ON FACE 
        // 429,430,459,460,489,490,  // left eye
        // 439,440,469,470,499,500,  // right eye

        // PUPILS LOOKING UP - CURSOR IN RIGHT DIRECTION ABOVE FACE
        // 369,370,399,400,429,430, // left eye
        // 381,382,411,412,441,442  // right eye

        // PUPILS LOOKING UP - CURSOR IN MIDDLE ABOVE FACE
        // 368,369,398,399,428,429,  // left eye
        // 380,381,410,411,440,441   // right eye

        // PUPILS LOOKING UP - CURSOR IN LEFT DIRECTION ABOVE FACE
        //  367,368,397,398,427,428, // left eye
        //  378,379,408,409,438,439, // right eye

        // PUPILS LOOKING LEFT - CURSOR ON LEFT OF FACE
        // 395,396,425,426,455,456,   // left eye
        // 407,408,437,438,467,468    // right eye

        // PUPILS LOOKING DOWN LEFT - CURSOR ON LEFT OF FACE
        // 455,456,485,486,515,516,   // left eye
        // 467,468,497,498,527,528    // right eye

        // PUPILS LOOKING DOWN LEFT - CURSOR AT THE BOTTOM OF THE FACE
        // 486,487,516,517,546,547,     // left eye
        // 498,499,528,529,558,559,     // right eye

        // PUPILS LOOKING DOWN MIDDLE - CURSOR AT THE BOTTOM OF THE FACE
        // 488,489,518,519,548,549,     // left eye
        // 500,501,530,531,560,561,     // right eye

        // PUPILS LOOKING DOWN RIGHT - CURSOR AT THE BOTTOM OF THE FACE
        // 490,491,520,521,550,551,     // left eye
        // 502,503,532,533,562,563,     // right eye

        // PUPILS LOOKING DOWN RIGHT - CURSOR ON RIGHT OF FACE
        // 461,462,491,492,521,522,     // left eye
        // 473,474,503,504,533,534,     // right eye

        // PUPILS LOOKING RIGHT - CURSOR ON RIGHT OF FACE
        // 401,402,431,432,461,462,     // left eye
        // 413,414,443,444,473,474,     // right eye
    // ]

    

    const pupilMiddleLeft = [
        // PUPILS LOOKING LEFT - CURSOR ON LEFT OF FACE
        395,396,425,426,455,456,   // left eye
        407,408,437,438,467,468    // right eye
    ]

    const pupilMiddleRight = [
        // PUPILS LOOKING RIGHT - CURSOR ON RIGHT OF FACE
        401,402,431,432,461,462,     // left eye
        413,414,443,444,473,474,     // right eye
    ]

    const pupilTopRight = [
        // PUPILS LOOKING UP - CURSOR IN RIGHT DIRECTION ABOVE FACE
        369,370,399,400,429,430, // left eye
        381,382,411,412,441,442  // right eye
    ]

    const pupilTopLeft = [
        // PUPILS LOOKING UP - CURSOR IN LEFT DIRECTION ABOVE FACE
        367,368,397,398,427,428, // left eye
        378,379,408,409,438,439, // right eye
    ]

    const pupilTopMiddle = [
        // PUPILS LOOKING UP - CURSOR IN MIDDLE ABOVE FACE
        368,369,398,399,428,429,  // left eye
        380,381,410,411,440,441   // right eye
    ]

    const pupilBottomLeft = [
        // PUPILS LOOKING DOWN LEFT - CURSOR ON LEFT OF FACE
        455,456,485,486,515,516,   // left eye
        467,468,497,498,527,528    // right eye
    ]

    const pupilBottomRight = [
        // PUPILS LOOKING DOWN RIGHT - CURSOR ON RIGHT OF FACE
        461,462,491,492,521,522,     // left eye
        473,474,503,504,533,534,     // right eye
    ]

    const pupilBottomMiddle = [
        // PUPILS LOOKING DOWN MIDDLE - CURSOR AT THE BOTTOM OF THE FACE
        488,489,518,519,548,549,     // left eye
        500,501,530,531,560,561,     // right eye
    ]





    function colorPixel(i){
        if (kittyPixels.includes(i)){
            return "on"
        } else if (pinkPixels.includes(i)){
            return "pink"
        } else if (pupilPixels.includes(i)){
            return "pupil"
        }
    }


    function showMouseCoords(event){
        let catContainerWindow = event.currentTarget   // element that the event handler is bound to i.e. cat container window(outer div)
        console.log(catContainerWindow)

        let position = catContainerWindow.getBoundingClientRect()
        console.log(position)

        let x = event.clientX - position.left // where the user clicked inside the outer div
        let y = event.clientY - position.top

        console.log("x", x)
        console.log("y", y)

        let targetWindowWidth = catContainerWindow.clientWidth
        let targetWindowHeight = catContainerWindow.clientHeight

        let quadrant=""



        // console.log("offsetX", offsetX)
        // console.log("offsetY", offsetY)
        console.log("width", targetWindowWidth)
        console.log("height", targetWindowHeight)
        // console.log(event.nativeEvent)
        // console.log(event.target)

        if (y < targetWindowHeight/2){
            quadrant = x < targetWindowWidth / 2 ? "Top Left" : "Top Right";
            if (quadrant == "Top Left"){

            }
        } else {
            quadrant = x < targetWindowWidth / 2 ? "Bottom Left" : "Bottom Right";
        }

        console.log(`Mouse is in: ${quadrant}`);
        // console.log(`X: ${offsetX}, Y: ${offsetY}`);



        const isLeft = x < targetWindowWidth / 3;
        const isRight = x > (targetWindowWidth * 2) / 3;
        const isTop = y < targetWindowHeight / 3;
        const isBottom = y > (targetWindowHeight * 2) / 3;

        let newPupils = pupilMiddle;

        if (isTop && isLeft){
            newPupils = pupilTopLeft
        } else if (isTop && isRight) {
            newPupils = pupilTopRight
        } else if (isTop){
            newPupils = pupilTopMiddle
        } else if (isBottom && isLeft){
            newPupils = pupilBottomLeft
        } else if (isBottom && isRight){
            newPupils = pupilBottomRight
        } else if (isBottom) {
            newPupils = pupilBottomMiddle
        } else if (isLeft) {
            newPupils = pupilMiddleLeft
        } else if (isRight) {
            newPupils = pupilMiddleRight
        } else {
            newPupils = pupilMiddle
        }
        
        setPupilPixels(newPupils);
    }

    return (
        <div className="cat-container" onMouseMove={showMouseCoords}>
            <div className="kitty-face">
                {Array(900).fill(0).map((_, i) => (
                <div key={i} className={colorPixel(i)}></div>
                ))}
            </div>
        </div>

    );
}