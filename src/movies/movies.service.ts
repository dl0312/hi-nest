import { Injectable } from '@nestjs/common';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
    private movies: Movie[] = []

    getAll(): Movie[] {
        return this.movies
    }

    getOne(id: string): Movie {
        return this.movies.find(movie => movie.id === id)
    }

    deleteOne(id: string): boolean {
        this.movies.filter(movie => movie.id !== id);
        return true;
    }

    create(movieData): Movie{
        const movie: Movie = {
            id: this.movies.length + 1,
            ...movieData
        }
        this.movies.push(movie)
        return movie;
    }
}
