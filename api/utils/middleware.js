import db from '../src/models';

// eslint-disable-next-line no-undef
exports.manageRoles = function (permissionID) {
	return async function (req, res, next) {
		try {
			const user = await db.Users.findOne({
				where: {
					id: req.authorizedData.id
				},
				include: {
					model: db.Roles,
					required: true,
					attributes: [
						[ db.Sequelize.fn('', db.sequelize.col('Roles.Permissions.RolePermissions.permissionid')),
							'permissionID' ]
					],
					through: {
						attributes: []
					},
					include: {
						model: db.Permissions,
						where: {
							id: permissionID
						},
						required: true,
						attributes: []
					}
				}
			});
			console.log(JSON.parse(JSON.stringify(user)));
			if (user){
				next();
			}
			else {
				return res.status(401).json('You dont have permission!');
			}

			/*
			 * let check = false;
			 * const roles = JSON.parse(JSON.stringify(user.Roles));
			 * roles.forEach(role => {
			 * 	if (role.permissionID === permissionID){
			 * 		next();
			 * 	}
			 * });
			 * if (check){
			 * 	next();
			 * }
			 * else {
			 * 	return res.json('You have no access');
			 * }
			 */
		}
		catch (error) {
			throw error;
		}
	};

};