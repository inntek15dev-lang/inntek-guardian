const { Role, Permission, User } = require('../models/auth');

const checkPermission = (resource, action) => {
    return async (req, res, next) => {
        try {
            // In a real app, we would get the user from the JWT (req.user)
            // For this MVP, we'll assume a user_id is passed in headers for testing
            const userId = req.headers['x-user-id'];
            if (!userId) {
                return res.status(401).json({ message: 'Authentication required' });
            }

            const user = await User.findByPk(userId, {
                include: [{
                    model: Role,
                    include: [Permission]
                }]
            });

            if (!user) {
                return res.status(401).json({ message: 'User not found' });
            }

            // Admin role has full access
            if (user.Role.slug === 'admin') {
                return next();
            }

            const hasPermission = user.Role.Permissions.some(
                p => p.resource === resource && p.action === action
            );

            if (hasPermission) {
                return next();
            }

            return res.status(403).json({ message: 'Forbidden: Insufficient permissions' });
        } catch (error) {
            console.error('Permission check error:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    };
};

module.exports = { checkPermission };
