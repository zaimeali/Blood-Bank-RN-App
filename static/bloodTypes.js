export const BLOOD_TYPE = [
    "O",
    "A",
    "B",
    "AB"
]

export const BLOOD_LEVEL = [
    "+", 
    "-"
]

export const DONOR = {
    "O+": ["A+", "B+", "AB+", "O+"],
    "O-": ["A+", "B+", "AB+", "O+", "A-", "B-", "AB-", "O-"],
    "A+": ["A+", "AB+"],
    "A-": ["A+", "A-", "AB+", "AB-"],
    "B+": ["B+", "AB+"],
    "B-": ["B+", "B-", "AB+", "AB-"],
    "AB+": ["AB+"],
    "AB-": ["AB+", "AB-"]
}