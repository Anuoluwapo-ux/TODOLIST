export const validRegister = async (req, res, next) => {
    const { firstName, lastName, email, password } = req.body;

    if (!firstName) {
        return res.status(400).json({ message: "Please enter your firstname" })
    } else if (firstName.length < 2) {
        return res.status(400).json({ message: "Your firstname is too short" })
    } else if (firstName.length > 15) {
        return res.status(400).json({ message: "Your firstname is too long" })
    }

    if (!lastName) {
        return res.status(400).json({ message: "Please enter your lastname" })
    } else if (lastName.length < 2) {
        return res.status(400).json({ message: "Your lastname is too short" })
    } else if (lastName.length > 15) {
        return res.status(400).json({ message: "Your lastname is too long" })
    }

    if (!email) {
        return res.status(400).json({ message: "Please enter your email" })
    } else if (!validateEmail(email)) {
        return res.status(400).json({ message: "Invalid email. Format is incorrect" })
    }

    if (!password) {
        return res.status(400).json({ message: "Please enter your password" })
    } else if (password.length < 6) {
        return res.status(400).json({ message: "password must be at least 6 characters long" })

    }
    next()
}

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        )
}