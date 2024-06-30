<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Address;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class OrderShipped extends Mailable
{
    use Queueable, SerializesModels;
    
    public $subject;
    public $otp;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($subject,$otp)
    {
        $this->subject = $subject;
        $this->otp = $otp;
    }
    /**
     * Get the message envelope.
     */



    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('email-forgot')  // Ensure this view exists or use below method
                    ->subject('Forget Password')
                    ->with([
                        'username' => 'yuktesh',
                        'otp' => $this->otp,
                    ]);
    }
}
