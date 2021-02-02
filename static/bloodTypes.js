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

export const RECEIVER = {
    "O+": ["O+", "O-"],
    "O-": ["O-"],
    "A+": ["O+", "O-", "A+", "A-"],
    "A-": ["O-", "A-"],
    "B+": ["O+", "O-", "B+", "B-"],
    "B-": ["O-", "B-"],
    "AB+": ["O+", "O-", "A+", "A-", "B+", "B-", "AB+", "AB-"],
    "AB-": ["O-", "A-", "B-", "AB-"]
}

export const BLOOD_TYPE_ICON = {
    "O+": "./../assets/blood_icons/O+ve.png",
    "O-": "./../assets/blood_icons/O-ve.png",
    "A+": "./../assets/blood_icons/A+ve.png",
    "A-": "./../assets/blood_icons/A-ve.png",
    "B+": "./../assets/blood_icons/B+ve.png",
    "B-": "./../assets/blood_icons/B-ve.png",
    "AB+": "./../assets/blood_icons/AB+ve.png",
    "AB-": "./../assets/blood_icons/AB-ve.png"
}