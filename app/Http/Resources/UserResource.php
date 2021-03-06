<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'role' => [
                'id' => $this->role->id,
                'name' => $this->role->name
            ],
            'email' => $this->email,
            'deleted' => $this->deleted_at ? true : false
        ];
    }
}
