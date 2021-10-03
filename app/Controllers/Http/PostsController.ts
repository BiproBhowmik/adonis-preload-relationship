import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Post from "App/Models/Post";

export default class PostsController {
  public async index ({}: HttpContextContract) {
  }

  public async create ({}: HttpContextContract) {
  }

  public async store ({}: HttpContextContract) {
  }

  public async show ({}: HttpContextContract) {

    return Post.query().preload('user')
  }

  public async edit ({}: HttpContextContract) {
  }

  public async update ({}: HttpContextContract) {
  }

  public async destroy ({}: HttpContextContract) {
  }
  public async getSinglePost ({params}: HttpContextContract) {
    return Post.query().preload('user').where('id', params.id).first()
  }
  public async allPostOfSpecifUser ({params}: HttpContextContract) {
    return Post.query().preload('user').where('user_id', params.userId)
  }
  
}
