import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';

import { Song, UserDto } from '../../services/song';

@Component({
  selector: 'app-followed',
  standalone: true,
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    RouterLink
  ],
  templateUrl: './followed.html',
  styleUrl: './followed.css'
})
export class FollowedComponent implements OnInit {

  followedUsers: UserDto[] = [];
  isLoading = true;

  constructor(private songService: Song) {}

  ngOnInit(): void {
    this.loadFollowedUsers();
  }

  loadFollowedUsers(): void {
    this.isLoading = true;
    this.songService.getFollowed().subscribe({
      next: (users: UserDto[]) => { // Tipado de 'users'
        this.followedUsers = users;
        this.isLoading = false;
      },
      error: (err: any) => { // Tipado de 'err'
        console.error('Error al cargar seguidos:', err);
        this.isLoading = false;
      }
    });
  }

  getUserInitials(user: UserDto): string {
    const names = user.nombre.split(' ');
    const initials = names.map((n: string) => n[0]).join('');
    return initials.substring(0, 2).toUpperCase();
  }

  unfollow(user: UserDto): void {
    if (confirm(`¿Seguro que quieres dejar de seguir a ${user.nombre}?`)) {
      this.songService.unfollowUser(user.username).subscribe({
        next: (updatedFollowedList: UserDto[]) => { // Tipado de la respuesta
          this.followedUsers = updatedFollowedList;
          alert(`Has dejado de seguir a ${user.nombre}.`);
        },
        error: (err: any) => console.error('Error al dejar de seguir:', err)
      });
    }
  }
}