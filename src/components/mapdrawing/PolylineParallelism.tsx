import  {LatLng} from 'leaflet'

export function generateParallelPolylines(original: LatLng[], baseDistance: number, numberOfParallelPolylines: number): LatLng[][] {
    let output = Array()
    let generatedDistances = generateDistances(baseDistance, numberOfParallelPolylines)
    let cleaned = polylineSanitizer(original)
    console.log(original)
    console.log(cleaned)
    if (cleaned != null) {
        for(let i = 0; i< generatedDistances.length; i++) {
    
            output[i] = generateParallelPolyline(cleaned, generatedDistances[i])
          }
        return output
    } else {
        return [original]
    }
}

export function polylineSanitizer(original: LatLng[]): LatLng[] | null {
    let output = new Array<LatLng>();
    if (original.length <= 1 ){
        return null
    }

    let pastPoint = original[0]
    let currentPoint = original[0];
    output.push(new LatLng(currentPoint.lat, currentPoint.lng))
    for(let i = 1; i< original.length; i++) {
        currentPoint = original[i];
        if (pastPoint.lat !== currentPoint.lat || pastPoint.lng !== currentPoint.lng) {
            output.push(new LatLng(currentPoint.lat, currentPoint.lng))
        }
        pastPoint = currentPoint
    }

    return output
}

function generateDistances(baseDistance: number, numberOfParallelPolylines: number): number[] {
    let numRight = Math.ceil(numberOfParallelPolylines/2)
    let numLeft = numberOfParallelPolylines - numRight

    let output = Array<number>(numberOfParallelPolylines)
    
    for (let i = 0; i < numRight; i ++) {
        let multiplier = i + 1;
        output[2 * i] = baseDistance * multiplier;
        if (2*i+1 < numberOfParallelPolylines) {
            output[2*i+1] = baseDistance * multiplier* -1
        }
    }

    return output
}

function generateParallelPolyline(original: LatLng[], distance: number): LatLng[] {
    let output = Array<LatLng>()
    let outputCounter = 0;
    
    if (original.length < 2) {
        return output
    } else if (original.length >= 2){
    
        for(let i = 0; i < original.length; i ++) {
            console.log(original[i])
            if (i ==0) {
                let firstLine = getGeneralFormOfLineFromTwoPoints(original[1], original[0]) 
                output[outputCounter] = getPointNormalToLineAtPoint(firstLine, original[0], distance)
            } else if (i == original.length - 1){
                let lastLine = getGeneralFormOfLineFromTwoPoints(original[i], original[i-1]) 
                output[outputCounter] = getPointNormalToLineAtPoint(lastLine, original[i], distance)
            } else {
                let firstLine = getParallelLineToLineBetweenTwoPoints(original[i], original[i-1], distance)
                let secondLine = getParallelLineToLineBetweenTwoPoints(original[i+1], original[i], distance)

                output[outputCounter] = getIntersectionOfTwoLines(firstLine, secondLine) || getPointNormalToLineAtPoint(firstLine, original[i+1], distance)
            }
            outputCounter ++
        }
    }

    return output
}

function getIntersectionOfTwoLines(line1: GeneralLineForm, line2: GeneralLineForm): LatLng | null {
    let A1 = line1.A
    let B1 = line1.B
    let C1 = line1.C
    let A2 = line2.A
    let B2 = line2.B
    let C2 = line2.C

    let S1 = Math.sqrt(A1*A1 + B1*B1)
    let S2 = Math.sqrt(A2*A2 + B2*B2)

    let A_B = A1/S1 - A2/S2
    let B_B = B1/S1 - B2/S2
    let C_B = C1/S1 - C2/S2
    let denom = A1 * B2 - A2 * B1

    if (denom == 0) {
        return null
    }

    let lng_I = (B1 * C2 - B2 * C1) / denom
    let lat_I = (C1 * A2 - A1 *  C2) / denom
    return new LatLng(lat_I, lng_I)
}

function getParallelLineToLineBetweenTwoPoints(p2: LatLng, p1: LatLng, distance: number): GeneralLineForm {
    let originalLineForm = getGeneralFormOfLineFromTwoPoints(p2, p1)

    return getParallelLineToLine(originalLineForm, distance)
}

function getParallelLineToLine(lineForm: GeneralLineForm, distance: number): GeneralLineForm {
    let A = lineForm.A
    let B = lineForm.B
    let C = lineForm.C

    let C2 = C - distance * Math.sqrt(A*A + B*B)

    return new GeneralLineForm(A, B, C2)
}

function getPointNormalToLineAtPoint(lineForm: GeneralLineForm, point: LatLng, distance: number):LatLng {
    let A = lineForm.A
    let B = lineForm.B
    let C = lineForm.C

    console.log(A)
    console.log(B)

    let S = Math.sqrt(A*A + B*B)

    let outLng = point.lng + distance * A / S
    let outLat = point.lat + distance * B / S

    return new LatLng(outLat, outLng)
}

function getGeneralFormOfLineFromTwoPoints(p2: LatLng, p1: LatLng): GeneralLineForm {
    let x1 = p1.lng
    let y1 = p1.lat
    let x2 = p2.lng
    let y2 = p2.lat

    let A = y1 - y2
    let B = x2 - x1
    let C = (x1 - x2) * y1 + (y2 - y1) * x1
    
    return new GeneralLineForm(A,B,C);
}

export class GeneralLineForm {
    A: number;
    B: number;
    C: number;
    constructor(A: number, B: number, C: number){
        this.A = A;
        this.B = B;
        this.C = C;
    }
}
