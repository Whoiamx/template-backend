import { Router } from "express";
import { userController } from "../controller";
import { authMiddleware, validateBody } from "../middlewares";
import { z } from "zod";

const router = Router();

// Validation schemas
const createUserSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  name: z.string().min(2, "Name must be at least 2 characters"),
});

const updateUserSchema = z.object({
  email: z.string().email("Invalid email format").optional(),
  name: z.string().min(2, "Name must be at least 2 characters").optional(),
});

const loginSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string().min(1, "Password is required"),
});

// Public routes
router.post(
  "/register",
  validateBody(createUserSchema),
  userController.register
);
router.post("/login", validateBody(loginSchema), userController.login);

// Protected routes
router.get("/me", authMiddleware, userController.getMe);
router.get("/", authMiddleware, userController.getAll);
router.get("/:id", authMiddleware, userController.getById);
router.post(
  "/",
  authMiddleware,
  validateBody(createUserSchema),
  userController.create
);
router.patch(
  "/:id",
  authMiddleware,
  validateBody(updateUserSchema),
  userController.update
);
router.delete("/:id", authMiddleware, userController.delete);

export { router as userRouter };
