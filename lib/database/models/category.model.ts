// "use server"

// import { CreateCategoryParams } from "@/types"
// import { handleError } from "../utils"
// import { connectToDatabase } from "../database"
// import Category from "../database/models/category.model"

// export const createCategory = async ({ categoryName }: CreateCategoryParams) => {
//   try {
//     await connectToDatabase();

//     const newCategory = await Category.create({ name: categoryName });

//     return JSON.parse(JSON.stringify(newCategory));
//   } catch (error) {
//     handleError(error)
//   }
// }

// export const getAllCategories = async () => {
//   try {
//     await connectToDatabase();

//     const categories = await Category.find();

//     return JSON.parse(JSON.stringify(categories));
//   } catch (error) {
//     handleError(error)
//   }
// }

import { Document,Schema,model,models } from "mongoose"

export interface ICategory extends Document{
    _id:string;
    name:string;
}

const CategorySchema = new Schema({
    name:{type:String,required:true,unique:true},
})
const Category = models.Category || model('Category',CategorySchema)

export default Category