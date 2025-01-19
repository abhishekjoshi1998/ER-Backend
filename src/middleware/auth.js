import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
    const tokenData = req.header('Authorization');
    const token = tokenData.replace("Bearer", "").trim();
    if (!token) return res.status(401).json({ message: 'Access denied no token' });
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decoded)
        req.user = decoded;
        next();
    } catch (error) {
        res.status(400).json({ message: 'Invalid token' });
    }
};

export default authMiddleware;
