<?php

namespace App\Mail;

use App\Models\EmployeeRequestForm;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class RequestApprovalMail extends Mailable implements ShouldQueue
{
    use Queueable, SerializesModels;

    public $employeeRequestForm;
    public $url;
    /**
     * Create a new message instance.
     *
     * @param \App\Models\EmployeeRequestForm $employeeRequestForm
     * @return void
     */
    public function __construct(EmployeeRequestForm $employeeRequestForm, string $url)
    {
        $this->employeeRequestForm = $employeeRequestForm;
        $this->url = $url;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->markdown('emails.request-approval', [
            'url' => $this->url,
            'title' => $this->employeeRequestForm->title
        ]);
    }
}
