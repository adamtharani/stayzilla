import jwt from 'jsonwebtoken';

export function jwtGenerator(user_id: any) {
  const payload = {
    user: user_id
  };

  return jwt.sign(payload, process.env.JWT_SECRET as jwt.Secret, { expiresIn: "1hr" });
};

